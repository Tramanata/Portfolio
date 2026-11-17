import "../../styles/Health.css";

export default function OverallSection() {
  return (
    <div>
              <section
          className="health-overview"
          aria-labelledby="overview-heading"
        >
          <div className="health-overview-heading">
            <h2 id="overview-heading">At a glance</h2>
            <span>Garmin integration coming soon</span>
          </div>

          <dl className="health-metrics">
            <div>
              <dt>Weekly active time</dt>
              <dd>—</dd>
            </div>
            <div>
              <dt>Daily steps</dt>
              <dd>—</dd>
            </div>
            <div>
              <dt>Resting heart rate</dt>
              <dd>—</dd>
            </div>
          </dl>
        </section>
    </div>
  );
}