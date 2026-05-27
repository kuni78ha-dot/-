import { useMemo, useState, useEffect } from "react";
import * as XLSX from "xlsx";
import QRCode from "react-qr-code";

export default function App() {
  const today = new Date().toISOString().split("T")[0];

  const [formInfo, setFormInfo] = useState({
    evaluator: "",
    date: today,
    caseName: ""
  });

  const sections = [
    {
      category: "活動全般",
      items: [
        "プロトコール遵守",
        "現場滞在時間短縮",
        "隊員間共有",
        "愛護的対応"
      ]
    },
    {
      category: "初期評価",
      items: [
        "気道評価",
        "循環評価",
        "観察対応"
      ]
    }
  ];

  const [scores, setScores] = useState({});
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    const local = localStorage.getItem("evaluation-history");
    if (local) setSavedData(JSON.parse(local));
  }, []);

  const totalScore = useMemo(() => {
    const map = { A: 3, B: 2, C: 1 };
    return Object.values(scores).reduce((s, v) => s + (map[v] || 0), 0);
  }, [scores]);

  const maxScore = sections.reduce((s, sec) => s + sec.items.length * 3, 0);

  const saveData = () => {
    const data = {
      id: Date.now(),
      ...formInfo,
      totalScore,
      maxScore
    };

    const updated = [data, ...savedData];
    setSavedData(updated);
    localStorage.setItem("evaluation-history", JSON.stringify(updated));

    const ws = XLSX.utils.json_to_sheet(updated);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "評価");
    XLSX.writeFile(wb, "evaluation.xlsx");
  };

  const exportCSV = () => {
    const ws = XLSX.utils.json_to_sheet(savedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "CSV");
    XLSX.writeFile(wb, "evaluation.csv");
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>評価表アプリ</h1>

      <input
        placeholder="評価者"
        value={formInfo.evaluator}
        onChange={(e) =>
          setFormInfo({ ...formInfo, evaluator: e.target.value })
        }
      />

      <input
        type="date"
        value={formInfo.date}
        onChange={(e) =>
          setFormInfo({ ...formInfo, date: e.target.value })
        }
      />

      <input
        placeholder="事案名"
        value={formInfo.caseName}
        onChange={(e) =>
          setFormInfo({ ...formInfo, caseName: e.target.value })
        }
      />

      {sections.map((section, sidx) => (
        <div key={sidx}>
          <h2>{section.category}</h2>

          {section.items.map((item, idx) => {
            const key = `${section.category}-${idx}`;

            return (
              <div key={idx} style={{ marginBottom: 10 }}>
                <p>{item}</p>

                {["A", "B", "C"].map((rank) => (
                  <button
                    key={rank}
                    onClick={() =>
                      setScores({ ...scores, [key]: rank })
                    }
                    style={{ marginRight: 10 }}
                  >
                    {rank}
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      ))}

      <h2>
        合計: {totalScore} / {maxScore}
      </h2>

      <button onClick={saveData}>Excel保存</button>
      <button onClick={exportCSV}>CSV出力</button>

      <div style={{ marginTop: 40 }}>
        <h3>QRコード</h3>
        <QRCode value={window.location.href} size={180} />
      </div>

      <div style={{ marginTop: 40 }}>
        <h3>管理画面</h3>

        {savedData.map((d) => (
          <div key={d.id}>
            {d.date} / {d.evaluator} / {d.totalScore}
          </div>
        ))}
      </div>
    </div>
  );
}
