import KnowledgeBaseSection from "@/Components/solutions/knowledgeBaseSection";
import { dailylog } from "@/Data/resources/knowledge";

export default function Page() {
  return (
    <KnowledgeBaseSection
      sectionTitle={dailylog.sectionTitle}
      sectionDescription={dailylog.sectionDescription}
      groups={dailylog.groups}
    />
  );
}
