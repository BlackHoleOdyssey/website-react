import { useEffect, useState } from "react";

export function useCssVar(varName: string): string {
    const [value, setValue] = useState<string>("");

    useEffect(() => {
        const resolve = () => {
            const resolved = getComputedStyle(document.documentElement)
                .getPropertyValue(varName)
                .trim();
            setValue(resolved);
        };

        resolve();

        const observer = new MutationObserver(resolve);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class", "data-theme", "style"],
        });

        if (import.meta.hot) {
            import.meta.hot.on("vite:afterUpdate", resolve);
        }

        return () => {
            observer.disconnect();
            if (import.meta.hot) {
                import.meta.hot.off("vite:afterUpdate", resolve);
            }
        };
    }, [varName]);

    return value;
}