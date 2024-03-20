    export default function generateUserCode(prefix, fullName) {
    const now = new Date();
    const nameInitial = fullName.split(' ').map(n => n.charAt(0)).join('');
    const time =
      (now.getMonth() + 1)
      .toString().padStart(2, '0') +
      now.getDate().toString().padStart(2, '0') +
      now.getFullYear().toString().slice(-2) +
      now.getHours().toString().padStart(2, '0') +
      now.getMinutes().toString().padStart(2, '0') +
      now.getSeconds().toString().padStart(2, '0');
    return `${prefix}-${nameInitial}-${time}`;
  }