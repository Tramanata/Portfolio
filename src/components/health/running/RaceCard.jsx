import "./RaceCard.css";

export default function RaceCard({ race }) {
  return (
    <article className="race-card">
      <div className="race-card__body">
        <div className="race-card__meta">
          <span>{race.distance}</span>
          <span aria-hidden="true">·</span>
          <span>{race.date}</span>
        </div>

        <h3 className="race-card__name">{race.name}</h3>

        <div className="race-card__links">
          {race.link && (
            <a
              href={race.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Official results <span aria-hidden="true">↗</span>
            </a>
          )}

          {race.stravalink && (
            <a
              href={race.stravalink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Strava <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

      <div className="race-card__result">
        <span className="race-card__time">{race.time}</span>
        <span className="race-card__label">Finish time</span>
      </div>
    </article>
  );
}