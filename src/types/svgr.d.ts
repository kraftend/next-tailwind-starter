declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  // eslint-disable-next-line prettier/prettier
  export { ReactComponent };
}

declare module '*.svg?url' {
  const content: string;
  export default content;
}
