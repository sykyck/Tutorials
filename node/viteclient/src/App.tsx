import { useEffect, useState } from "react";
import { fetchUsers } from "@redux/slices/user/actions";
import { useAppDispatch, useAppSelector } from "@common/hooks/appRedux";
import "./App.css";

interface User {
  name: string;
  age: number;
}

const USERS_PER_PAGE = 5;

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const {users, currentUserPage, totalUserPages, totalUsers} = useAppSelector((state) => state.common.userSlice);
  const dispatch = useAppDispatch();

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !age.trim()) return;
    const newUser: User = { name: name.trim(), age: parseInt(age) };
    //setUsers((prev) => [...prev, newUser]);
    setName("");
    setAge("");
    setShowDialog(false);
    // go to last page automatically if new user pushes beyond visible range
    const totalPages = Math.ceil((users.length + 1) / USERS_PER_PAGE);
    //setCurrentPage(totalPages);
  };

  // pagination logic
  const startIndex = (currentUserPage - 1) * USERS_PER_PAGE;
  const paginatedUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalUserPages) {
      dispatch(fetchUsers({page:page, limit:USERS_PER_PAGE})).then(()=>{

      }).catch((err:any)=>{
        window.alert(`Failed to fetch users for ${page} , ${err}`);
      });
    }
  };

  useEffect(()=>{
    dispatch(fetchUsers({page:currentUserPage, limit:USERS_PER_PAGE}));
  }, []);

  return (
    <>
      {/* User Table */}
      <div style={{ marginTop: "2rem" }}>
        <h2>Users</h2>
        <button onClick={() => setShowDialog(true)}>Add User</button>

        <table
          style={{
            width: "100%",
            marginTop: "10px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Age</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                    {user.name}
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                    {user.age}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} style={{ textAlign: "center", padding: "8px" }}>
                  No users yet
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        {users.length > 0 && (
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <button
              disabled={currentUserPage === 1}
              onClick={() => goToPage(currentUserPage - 1)}
            >
              Prev
            </button>
            <span>
              Page {currentUserPage} of {totalUserPages}
            </span>
            <button
              disabled={currentUserPage === totalUserPages}
              onClick={() => goToPage(currentUserPage + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Add User Dialog */}
      {showDialog && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "2rem",
              borderRadius: "8px",
              width: "300px",
            }}
          >
            <h3>Add User</h3>
            <form onSubmit={handleAddUser}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%", marginBottom: "1rem", padding: "6px" }}
                required
              />
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                style={{ width: "100%", marginBottom: "1rem", padding: "6px" }}
                required
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <button type="submit">Add</button>
                <button type="button" onClick={() => setShowDialog(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
