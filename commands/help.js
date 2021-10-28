module.exports = {
  name: 'help',
  description: 'aide.',
  execute(message) {
    message.channel.send('```&avatar(mention) : voir la photo de profil \n&ping : latence du bot \n&play(lien) : jouer une musique \n&prune(1-99) : supprimer les anciens messages \n&server : infos serveur \n&warkzent```');
  }
};