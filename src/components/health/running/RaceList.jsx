import { useState } from "react";
import RaceCard from "./RaceCard";

export default function RaceList({ races }) {
  const [expanded, setExpanded] = useState(false);

  if (!races.length) {
    return <p className="race-list-empty">No races added yet.</p>;
  }

  const visibleRaces = expanded ? races : races.slice(0, 3);

  return (
    <div>
      <div className="race-list">
        {visibleRaces.map((race) => (
          <RaceCard key={race.id} race={race} />
        ))}
      </div>

      {races.length > 3 && (
        <button
          type="button"
          className="race-expand"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded
            ? "Show fewer races ↑"
            : `Show all ${races.length} races ↓`}
        </button>
      )}
    </div>
  );
}