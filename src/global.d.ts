declare namespace JSX {
  interface IntrinsicElements {
    // Add missing HTML tag here
    div: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >;
  }
}
