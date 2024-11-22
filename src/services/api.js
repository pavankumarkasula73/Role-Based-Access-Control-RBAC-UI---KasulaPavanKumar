// Simulated API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Local storage keys
const STORAGE_KEYS = {
  USERS: 'rbac_users',
  ROLES: 'rbac_roles',
  PERMISSIONS: 'rbac_permissions'
};

// Initialize storage with mock data if empty
const initializeStorage = (key, initialData) => {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(initialData));
  }
  return JSON.parse(localStorage.getItem(key));
};

// API service
export const api = {
  // Users
  async getUsers() {
    await delay(500);
    return initializeStorage(STORAGE_KEYS.USERS, []);
  },

  async createUser(user) {
    await delay(500);
    const users = await this.getUsers();
    const newUser = {
      ...user,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    return newUser;
  },

  async updateUser(id, updates) {
    await delay(500);
    const users = await this.getUsers();
    const index = users.findIndex(u => u.id === id);
    if (index === -1) throw new Error('User not found');
    users[index] = { ...users[index], ...updates };
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    return users[index];
  },

  async deleteUser(id) {
    await delay(500);
    const users = await this.getUsers();
    const filtered = users.filter(u => u.id !== id);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(filtered));
  },

  // Roles
  async getRoles() {
    await delay(500);
    return initializeStorage(STORAGE_KEYS.ROLES, []);
  },

  async createRole(role) {
    await delay(500);
    const roles = await this.getRoles();
    const newRole = {
      ...role,
      id: Date.now().toString(),
    };
    roles.push(newRole);
    localStorage.setItem(STORAGE_KEYS.ROLES, JSON.stringify(roles));
    return newRole;
  },

  async updateRole(id, updates) {
    await delay(500);
    const roles = await this.getRoles();
    const index = roles.findIndex(r => r.id === id);
    if (index === -1) throw new Error('Role not found');
    roles[index] = { ...roles[index], ...updates };
    localStorage.setItem(STORAGE_KEYS.ROLES, JSON.stringify(roles));
    return roles[index];
  },

  async deleteRole(id) {
    await delay(500);
    const roles = await this.getRoles();
    const filtered = roles.filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEYS.ROLES, JSON.stringify(filtered));
  },

  // Permissions
  async getPermissions() {
    await delay(500);
    return initializeStorage(STORAGE_KEYS.PERMISSIONS, []);
  },

  async createPermission(permission) {
    await delay(500);
    const permissions = await this.getPermissions();
    const newPermission = {
      ...permission,
      id: Date.now().toString(),
    };
    permissions.push(newPermission);
    localStorage.setItem(STORAGE_KEYS.PERMISSIONS, JSON.stringify(permissions));
    return newPermission;
  },

  async updatePermission(id, updates) {
    await delay(500);
    const permissions = await this.getPermissions();
    const index = permissions.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Permission not found');
    permissions[index] = { ...permissions[index], ...updates };
    localStorage.setItem(STORAGE_KEYS.PERMISSIONS, JSON.stringify(permissions));
    return permissions[index];
  },

  async deletePermission(id) {
    await delay(500);
    const permissions = await this.getPermissions();
    const filtered = permissions.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.PERMISSIONS, JSON.stringify(filtered));
  }
};