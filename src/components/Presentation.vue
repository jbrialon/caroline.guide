<script >

</script>

<template>
  <section id="presentation" class="presentation">
    <div class="grid-container height100">
      <div class="grid-x height100">
        <div class="cell small-12 medium-8 medium-offset-4 presentation__content">
          <p>
            Portage en montagne dans la Vallée de l'Ubaye
            <br><br>
            Les mulets et les chevaux ont été utilisés pendant des siècles pour transporter des charges sur les routes et chemins de montagne.
            Aujourd’hui, la plupart des transports en milieu difficile d'accès sont effectués en hélicoptère.
            Avec Badou nous vous proposons une alternative écologique afin de répondre à une demande croissante de portages de la part des gardiens de refuges, des éleveurs, des particuliers et bien d'autres...
            Nous avons donc commencé les portages avec mon mulet, en été 2020 dans la vallée de l'Ubaye.
            <br><br>
            Les travaux de portage en montagne sont effectués sur tous types de terrain sauf pierriers infranchissables et falaises, afin de remplacer les engins motorisés ou d'accèder là où aucune mécanique n'irait.
            Mon Badou et moi même déposerons le matériel, où vous le souhaitez, quand vous en avez besoin.
            Que ce soit des vivres, du gaz, du bois, du sel, du sable, du ciment, du matériel fragile, des piquets, des clôtures... nous trouvons la solution adaptée de portage animal pour vous.
            <br><br>
            Les devis de portage en montagne, inclueront le travail du meneur, le transport (A/R) du mulet, la mise en préparation des charges, ainsi que les frais de déplacement.
            N'hesitez pas à me contacter pour plus d'informations.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.presentation {
  position: relative;
  width: 100vw;
  height: 80vh;
  background-image: url('../src/assets/background-2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  color: $c-white;

  &:after {
    position: absolute;
    content: "";
    display: block;
    background: $c-black;;
    opacity: .15;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;

    @include breakpoint(medium) {
      display: none;
    }
  }

  &__content {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    z-index: 10;
    
    @include breakpoint(medium) {
      justify-content: flex-end;
      text-align: left;
      margin-bottom: 6vw;
    }
  }
}
</style>
