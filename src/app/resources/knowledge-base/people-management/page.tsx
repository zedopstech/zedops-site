import KnowledgeBaseSection from "@/Components/solutions/knowledgeBaseSection";
import { peopleManagementSection } from "@/Data/resources/knowledge";

export default function Page() {
  return (
    <KnowledgeBaseSection
      sectionTitle={peopleManagementSection.sectionTitle}
      sectionDescription={peopleManagementSection.sectionDescription}
      groups={peopleManagementSection.groups}
    />
  );
}
