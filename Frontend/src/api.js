export async function postUserData(formData) {
  try {
    const memberData = {
      ...formData,
      skills: formData.skills.split(",").map((skill) => skill.trim()).filter(Boolean),
    };
    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(memberData),
    });
    if (!res.ok) throw new Error("Failed to add member");
    return true;
  } catch (err) {
    console.error("Error adding member: ", err);
    return false;
  }
};

export async function getUserData() {
  try {
    const res = await fetch('http://localhost:3000/api/users');
    if (!res.ok) throw new Error('Failed to fetch team members');
    return await res.json();
  } catch (err) {
    console.error("Error fetching user data: ", err);
  }
}
