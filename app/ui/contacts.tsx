import ExternalLink from "@/app/ui/external-link";
import { contacts } from "@/app/lib/content";

export default function Contacts() {
  return (
    <>
      <div className="whitespace-nowrap">
        <ExternalLink link_url={contacts.email} underlined={true}>
          email
        </ExternalLink>
      </div>
      <div className="whitespace-nowrap">
        <ExternalLink link_url={contacts.linkedin} underlined={true}>
          linkedin
        </ExternalLink>
      </div>
      <div className="whitespace-nowrap">
        <ExternalLink link_url={contacts.github} underlined={true}>
          github
        </ExternalLink>
      </div>
    </>
  );
}
