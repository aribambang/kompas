function checkPassword(password) {
  const len = password.length;
  const kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%^&*()-+';
  let duplicate = {};
  let up = 0;
  let low = 0;
  let special = 0;
  let num = 0;

  if (len < 10) return 'Salah karena kurang dari 10 karakter';
  if (len > 20) return 'Salah karena lebih dari 20 karakter';
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < kamus.length; j++) {
      if (password[i] === kamus[j]) {
        if (!duplicate[password[i]]) {
          duplicate[password[i]] = 0;
          if (j < 26) up += 1;
          else if (j < 52) low += 1;
          else if (j < 62) num += 1;
          else if (j < 73) special += 1;
        } else {
          return `Salah karena huruf ${password[i]} berulang lebih dari 2x`;
        }
        duplicate[password[i]] += 1;
      }
    }
  }
  if (up < 2) return 'Salah karena minimal 2 huruf besar';
  if (low < 5) return 'Salah karena minimal 5 huruf kecil';
  if (special < 1) return 'Salah minimal special character (@#$%^&*()-+)';
  if (num < 2) return 'Salah minimal 2 angka';
  return 'Benar';
}

console.log(checkPassword('Google12#4'));
console.log(checkPassword('17Februari2021!'));
console.log(checkPassword('Lar1P4g!'));
console.log(checkPassword('Kompas1702!'));
console.log(checkPassword('B4nD3R Ja!L'));
