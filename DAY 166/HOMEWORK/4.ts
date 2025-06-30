enum Role {
  Guest,
  User,
  Admin,
}

function getWelcomeMessage(role: Role): string {
  switch (role) {
    case Role.Guest:
      return "Guest access only";
    case Role.User:
      return "Welcome User";
    case Role.Admin:
      return "Welcome Admin";
    default:
      return "Unknown Role";
  }
}

// 🔍 გამოყენება:
console.log(getWelcomeMessage(Role.Guest)); // "Guest access only"
console.log(getWelcomeMessage(Role.Admin)); // "Welcome Admin"
