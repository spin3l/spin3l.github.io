import { createRef, type ComponentChildren } from "preact";
import { ClipboardIcon } from "./icons/ClipboardIcon.tsx";

export const CopyClipboard = ({
  children,
  ...props
}: {
  children: ComponentChildren;
}) => {
  const snippetRef = createRef<HTMLPreElement>();
  const buttonRef = createRef<HTMLButtonElement>();

  const copyToClipboard = async () => {
    let snippet = snippetRef.current;
    let snippetText = snippet?.innerText ?? "";
    let button = buttonRef.current!;
    let copyFeedback = document.getElementById("copy-text")!;

    await navigator.clipboard.writeText(snippetText);

    // Apply feedback
    copyFeedback.innerText = "Copiado!";
    button.classList.remove("bg-gray-700");
    button.classList.add("bg-green-600");

    setTimeout(() => {
      copyFeedback.innerText = "Copiar";
      button.classList.remove("bg-green-600");
      button.classList.add("bg-gray-700");
    }, 700);
  };

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      <pre {...props} ref={snippetRef}>
        {children}
      </pre>
      <button
        className="flex justify-center items-center p-1 gap-x-2 text-sm text-gray-300 bg-gray-700 rounded-lg top-4 right-4 px-2"
        ref={buttonRef}
        onClick={copyToClipboard}
      >
        <ClipboardIcon /> <p id="copy-text">Copiar</p>
      </button>
    </div>
  );
};
