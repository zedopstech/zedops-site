import KnowledgeBaseSection from "@/Components/solutions/knowledgeBaseSection";
import { projectManagementSection } from "@/Data/resources/knowledge";

export default function Page() {
  return (
    <KnowledgeBaseSection
      sectionTitle={projectManagementSection.sectionTitle}
      sectionDescription={projectManagementSection.sectionDescription}
      groups={projectManagementSection.groups}
    />
  );
}
