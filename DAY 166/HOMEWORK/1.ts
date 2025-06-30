interface User {
  id: number;
  username: string;
  email: string;
  isAdmin?: boolean;
}

function getAdmins(users: User[]): User[] {
  return users.filter(user => user.isAdmin);
}

// 🔍 გამოყენება:
const users: User[] = [
  { id: 1, username: "nino", email: "nino@example.com", isAdmin: true },
  { id: 2, username: "giorgi", email: "giorgi@example.com" },
  { id: 3, username: "mari", email: "mari@example.com", isAdmin: true }
];

console.log(getAdmins(users)); // მხოლოდ admin-ები
