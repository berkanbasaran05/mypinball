// hooks/useRouteChangeHandler.ts
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setIsVisible } from "../redux/features/footer/footerSlice";

export function useRouteChangeHandler() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      dispatch(setIsVisible(false));
    };

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        dispatch(setIsVisible(true));
      }, 2000);
    };

    if (typeof window !== "undefined") {
      router.events.on("routeChangeStart", handleRouteChangeStart);
      router.events.on("routeChangeComplete", handleRouteChangeComplete);

      return () => {
        router.events.off("routeChangeStart", handleRouteChangeStart);
        router.events.off("routeChangeComplete", handleRouteChangeComplete);
      };
    }
  }, [router, dispatch]);
  console.log(setIsVisible);
}
