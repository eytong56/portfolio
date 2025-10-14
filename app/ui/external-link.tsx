export default function ExternalLink({
  text,
  link_url,
}: {
  text: string;
  link_url: string;
}) {
  return (
    <div>
      <a href={link_url}>{text}</a>
    </div>
  );
}
