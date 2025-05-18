"use client";
import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import Image from "next/image";

interface GovernanceItem {
  _id?: string;
  name: string;
  url: string;
  category?: string;
}

interface GovernanceCategory {
  _id?: string;
  key: string;
  label: string;
}

export default function DisclosurePage() {
  const [files, setFiles] = useState<GovernanceItem[]>([]);
  const [categories, setCategories] = useState<GovernanceCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    fetch("/api/governance")
      .then((res) => res.json())
      .then(setFiles);
    fetch("/api/governance-categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  const allCategory = { key: "all", label: "الكل" };
  const displayCategories = [allCategory, ...categories];

  const filteredFiles =
    selectedCategory === "all"
      ? files
      : files.filter((f) => f.category === selectedCategory);

  return (
    <div className="container mx-auto p-6 mt-28 h-screen">
      <div className="w-full mx-auto">
        <Image
          src="/images/banr1.jpg"
          alt="About Us"
          width={1000}
          height={1000}
          className="mx-auto rounded-lg"
        />
      </div>
      <h1 className="text-2xl font-bold my-8 text-center ">الحوكمة</h1>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {displayCategories.map((cat) => (
          <button
            key={cat.key}
            className={`px-4 py-2 rounded font-bold border transition ${
              selectedCategory === cat.key
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border-blue-600"
            }`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredFiles.map((file, index) => (
          !!file.url && typeof file.url === 'string' && file.url.trim() !== '' && (
            <div
              key={file._id || index}
              className="p-4 border bg-slate-100 hover:bg-slate-300 dark:bg-darkTheme2 hover:dark:bg-darkTheme3 duration-300 rounded-lg flex justify-between items-center"
            >
              <span className="font-medium">{file.name}</span>
              <div className="flex gap-2">
                <a
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-500 text-white p-2 rounded">
                    <FaEye />
                  </button>
                </a>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
