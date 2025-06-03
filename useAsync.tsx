import { useState, useEffect, useRef, useCallback } from "react";

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface AsyncFunctionOptions {
  signal?: AbortSignal;
  [key: string]: any;
}

const useAsync = <T, Args extends any[]>(
  asyncFunction: (...args: [...Args, AsyncFunctionOptions?]) => Promise<T>
) => {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const mountedRef = useRef(false);

  const execute = useCallback(
    async (...args: Args[]) => {
      setState({ data: null, loading: true, error: null });

      const abortController = new AbortController();
      const signal = abortController.signal;

      try {
        const lastArg = args[args.length - 1];
        const mergedArgs = [...args] as [...Args, AsyncFunctionOptions?];

        if (
          typeof lastArg !== "object" ||
          lastArg === null ||
          !("signal" in lastArg)
        ) {
          mergedArgs.push({ signal } as AsyncFunctionOptions);
        } else {
          mergedArgs[args.length - 1] = {
            ...(lastArg as AsyncFunctionOptions),
            signal,
          };
        }

        const response = await (asyncFunction as any)(...mergedArgs);

        if (mountedRef.current) {
          setState((prevState) => ({
            ...prevState,
            data: response,
            loading: false,
          }));
        }
      } catch (err: any) {
        if (err.name === "AbortError") {
          if (mountedRef.current) {
            setState((prevState) => ({ ...prevState, loading: false }));
          }
        } else if (mountedRef.current) {
          setState((prevState) => ({
            ...prevState,
            error: err as Error,
            loading: false,
          }));
        }
      }

      return () => {
        abortController.abort();
      };
    },
    [asyncFunction]
  );

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return {
    execute,
    ...state,
  };
};

export default useAsync;
