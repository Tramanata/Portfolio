import { useState } from "react";
import { Menu } from "../components/Menu";
import RunningSection from "../components/health/running/RunningSection";
import HikingSection from "../components/health/hiking/HikingSection";
import OverallSection from "../components/health/OverallSection";
import "../styles/Health.css";

const activities = ["Overall", "Running", "Hiking", "Climbing"];

export default function Health() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [activeActivity, setActiveActivity] = useState("Overall", "Running", "Hiking");

  return (
    <div className="page">
      <Menu
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />

      <main className="health">
        <header className="health-header">
          <p className="health-eyebrow">LIFE OUTSIDE WORK</p>
          <h1 className="health-title">Health & Adventure.</h1>
          <p className="health-description">
            Big into running, hiking, climbing, and staying active
          </p>
        </header>

        <div
          className="health-tabs"
          role="group"
          aria-label="Choose an activity"
        >
          {activities.map((activity) => (
            <button
              key={activity}
              type="button"
              aria-pressed={activeActivity === activity}
              aria-controls="activity-content"
              onClick={() => setActiveActivity(activity)}
            >
              {activity}
            </button>
          ))}
        </div>

        <section
          id="activity-content"
          className="health-activity"
          aria-label={activeActivity}
        >
          {activeActivity === "Overall" && <OverallSection />}
          {activeActivity === "Running" && <RunningSection />}
          {activeActivity === "Hiking" && <HikingSection />}

          {activeActivity === "Climbing" && (
            <div className="health-placeholder">
              <h2>A little higher each time.</h2>
              <p>Climbing sessions and favorite routes coming soon.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}