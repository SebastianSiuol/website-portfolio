function LinkButton({ href, text }: { href: string; text: string }) {
  return (<>
    <a href=""
      className="link-button"
      onClick={(e) => {
        e.preventDefault();
        window.open(href, "_blank");
      }}>
        {text}
      </a>
  </>)
}

export default LinkButton;