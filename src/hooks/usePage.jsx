import { useEffect } from "react";

export const usePage = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
}) => {
  useEffect(() => {
    document.title = title;
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", ogTitle || title || "");
    setMetaTag("property", "og:description", ogDescription || description || "");
    setMetaTag("property", "og:image", ogImage || "");
    setMetaTag("property", "og:url", ogUrl || window.location.href);

    return () => {
      document.title = "";
      document.querySelector('[name="description"]').removeAttribute("content");
    };
  }, [title, description, ogTitle, ogDescription, ogImage, ogUrl]);

  const setMetaTag = (attribute, key, content) => {
    if (content) {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    }
  };
};

export default usePage;
