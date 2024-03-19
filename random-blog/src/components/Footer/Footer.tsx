function Footer() {
    return (
      <footer className=" w-full px-4 py-3 bg-neutral-400">
        <article className=" w-full flex justify-center">
          <p>This is a footer, all rigths reserverd - { new Date().getFullYear()}</p>
        </article>
      </footer>
    );
}

export default Footer;