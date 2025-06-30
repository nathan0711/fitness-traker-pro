import { useParams, useNavigate } from "react-router-dom";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function ActivityDetail() {
  const { activityId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const { data: activity, loading, error } = useQuery(
    `/activities/${activityId}`,
    `activity-${activityId}`
  );

  const { mutate: deleteActivity, loading: deleting, error: deleteError } = useMutation(
    "DELETE",
    `/activities/${activityId}`,
    ["activities"]
  );

  async function handleDelete() {
    await deleteActivity();
    navigate("/");
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2>{activity.name}</h2>
      <p>{activity.description}</p>
      <p><em>Created by: {activity.creatorName}</em></p>
      {token && (
        <button onClick={handleDelete} disabled={deleting}>
          {deleting ? "Deleting..." : "Delete Activity"}
        </button>
      )}
      {deleteError && <p style={{ color: "red" }}>{deleteError}</p>}
    </>
  );
}