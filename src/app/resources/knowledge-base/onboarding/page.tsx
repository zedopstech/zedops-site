import KnowledgeBaseSection from "@/Components/solutions/knowledgeBaseSection";
import { newuser } from "@/Data/resources/knowledge";

export default function Page() {
  return (
    <KnowledgeBaseSection
      sectionTitle={newuser.sectionTitle}
      sectionDescription={newuser.sectionDescription}
      groups={newuser.groups}
    />
  );
}
