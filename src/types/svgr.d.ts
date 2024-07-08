declare module '*.svg?react' {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
