/**
 * TODO: LeafScreen render a screen with a title or get ReactNode
 * @param {string} title - The title of the screen
 * @returns ReactElement
 */

function LeafScreen({ title }: { title: string }) {
  return <div className="p-2 text-white">{title}</div>;
}

export default LeafScreen;
