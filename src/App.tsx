import { Tag, TagInput } from "emblor";
import { useState } from "react";

function App() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <p>Tag input:</p>
      <TagInput
        tags={tags}
        setTags={(newTags) => setTags(newTags)}
        placeholder="Add a tag"
        styleClasses={{
          input: "w-full sm:max-w-[350px]",
        }}
        activeTagIndex={activeTagIndex}
        setActiveTagIndex={setActiveTagIndex}
      />
    </main>
  );
}

export default App;
