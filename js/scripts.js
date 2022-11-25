const { createApp } = Vue;

createApp({
    data () {
      return {        
        datiUtenti: [
            {
              name: 'Michele',
              avatar: "img/avatar_1.jpg",
              visible: true,
              messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent',               
              },
              {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di dargli da mangiare',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Fabio',
              avatar: "img/avatar_2.jpg",
              visible: true,
              messages: [{
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent',
              },
              {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
              },
              {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
              },
              {
                date: '20/03/2020 16:40:25',
                message: 'Niente allora, sarà per un\'altra volta',
                status: 'received'
              },

              ],
            },
            {
              name: 'Samuele',
              avatar: "img/avatar_3.jpg",
              visible: true,
              messages: [{
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received',
              },
              {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Alessandro B',
              avatar: "img/avatar_4.jpg",
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
              },
              {
                date: '10/01/2020 15:50:32',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
              }
              ]
            },
            {
              name: 'Alessandro L',
              avatar: "img/avatar_5.jpg",
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                message: 'Ehi, come stai?',
                status: 'sent',
              },
              {
                date: '10/01/2020 15:40:20',
                message: 'Mah, giornata abbastanza pesante. Tu?',
                status: 'received'
              }
              ]
            },
            {
              name: 'Claudia',
              avatar: "img/avatar_6.jpg",
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                message: 'Ho comprato un nuovo gioco da tavolo',
                status: 'sent',
              },
              {
                date: '10/01/2020 16:52:12',
                message: 'Figo, come si chiama?',
                status: 'received'
              }
              ]
            },
            {
              name: 'Federico',
              avatar:"img/avatar_7.jpg",
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                message: 'Calcettino stasera?',
                status: 'sent',
              },
              {
                date: '10/01/2020 17:50:23',
                message: 'Daje, volentieri',
                status: 'received'
              }
              ]
            },
            {
              name: 'Davide',
              avatar: "img/avatar_8.jpg",
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
              },
              {
                date: '10/01/2020 15:34:52',
                message: 'Si, ma voglio andare al giapponese',
                status: 'received'
              }
              ]
            },                        
          
          ],
        newMessage: {
          message: '',
        },
         activeFriend: null,
         index: 0      
        }
    },
    methods: {
      setActiveFriend(i){
        console.log(this.activeFriend, this.index)
        this.activeFriend = this.datiUtenti[i]
        this.index = i
        },
        inputEnter (index) {
          const today = new Date()
          let actualTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          // Messaggio inviato
          this.datiUtenti[index].messages.push({
          date: '10/01/2020' + " " + actualTime,
          message: this.newMessage.message,
          status: 'sent'
          })
          this.newMessage.message = ''
          // Messaggio in risposta
          messageReceivingDelayed(() => {
              this.datiUtenti[index].messages.push({
              date: '10/01/2020' + " " + actualTime,
              message: 'Bella madre',
              status: 'received',
              })
        }, 3500);
      }
        //CHIUSURA DEI METHODS
      }, beforeMount () {
        this.activeFriend = this.datiUtenti[0]
      },
}).mount("#app")
// updatePosts: function () {
//   var self = this;
//   self.$http.get('api/posts', function(responce, status, request) {
//     self.posts = responce.data;
//     setTimeout(function(){ self.updatePosts() }, 2000);
//   });
