import { useState, useEffect } from "react";
import nhost from "./nhost";

const getUserPreferences = async (userId) => {
  const query = `
    query {
      preferences(where: { user_id: { _eq: "${userId}" } }) {
        topics
        sources
      }
    }
  `;
  const response = await nhost.graphql.request(query);
  return response.data.preferences;
};

const Preferences = ({ userId }) => {
  const [preferences, setPreferences] = useState([]);

  useEffect(() => {
    const fetchPreferences = async () => {
      const data = await getUserPreferences(userId);
      setPreferences(data);
    };
    fetchPreferences();
  }, [userId]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Your Preferences</h2>
      {preferences.map((pref, index) => (
        <div key={index}>
          <p>Topics: {pref.topics.join(", ")}</p>
          <p>Sources: {pref.sources.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Preferences;
