// TODO: Retrive data from backend
const ROLES = [
  { id: 1, name: 'Produtor' },
  { id: 2, name: 'Reciclador' },
];

function isProducer(roleId) {
  return roleId === ROLES.filter(role => role.id === 1)[0].id;
}

function isRecycler(roleId) {
  return roleId === ROLES.filter(role => role.id === 2)[0].id;
}

export { ROLES, isProducer, isRecycler };
