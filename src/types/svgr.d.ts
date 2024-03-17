declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

declare module '*.svg?url' {
  const content: string;
  export default content;
}
