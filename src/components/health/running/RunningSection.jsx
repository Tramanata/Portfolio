import RaceList from "./RaceList";
import { races } from "../../../data/races";

export default function RunningSection() {
  return (
    <div>
      <section>
        <h2>Race history</h2>
        <RaceList races={races} />
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Recent runs</h2>
        <p>My latest activities from Garmin Connect. Coming Soon...</p>
      </section>
    </div>
  );
}