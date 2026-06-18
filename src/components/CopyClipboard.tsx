import { getLangFromUrl, useTranslations } from "@/i18n/utils.ts";
import { createRef, type ComponentChildren } from "preact";
import { ClipboardIcon } from "./icons/ClipboardIcon.tsx";

export const CopyClipboard = ({
  url,
  children,
  ...props
}: {
  url: URL;
  children: ComponentChildren;
}) => {
  const snippetRef = createRef<HTMLPreElement>();
  const buttonRef = createRef<HTMLButtonElement>();

  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);

  const copyToClipboard = async () => {
    let snippet = snippetRef.current;
    let snippetText = snippet?.innerText ?? "";
    let button = buttonRef.current!;
    let copyFeedback = document.getElementById("copy-text")!;

    await navigator.clipboard.writeText(snippetText);

    // Apply feedback
    copyFeedback.innerText = t("actions.copied");
    button.classList.remove("bg-gray-200");
    button.classList.add("bg-green-200");

    setTimeout(() => {
      copyFeedback.innerText = t("actions.copy");
      button.classList.remove("bg-green-200");
      button.classList.add("bg-gray-200");
    }, 700);
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      <pre {...props} ref={snippetRef} class="text-lg md:text-xl">
        {children}
      </pre>
      <button
        className="top-4 right-4 flex justify-center items-center gap-x-2 bg-gray-200 p-1 px-2 rounded-lg w-full sm:w-[fit-content] text-gray-800 text-sm"
        ref={buttonRef}
        onClick={copyToClipboard}
      >
        <ClipboardIcon /> <p id="copy-text">{t("actions.copy")}</p>
      </button>
    </div>
  );
};
