import styled from 'styled-components'

const Sidebar = styled.div`
  .sidebar {
    --sidebar-width: 30rem;
    margin: 0rem 0;

    &--backdrop {
      position: fixed;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: rgba(0, 0, 0, 0.5);

      z-index: 40;

      transition-property: opacity;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 200ms;

      &__open {
        opacity: 1;
      }

      &__close {
        opacity: 0;
        pointer-events: none;
      }

      @media (min-width: 1024px) {
        display: none;
        z-index: auto;
      }
    }

    &--menu {
      position: absolute;
      z-index: 40;

      transform: translateX(-30rem);

      height: calc(100vh - 4rem);
      overflow-y: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      width: 30rem;
      flex-shrink: 0;
      background-color: hsl(var(--clr-grey-700));
      padding: 1.5rem;
      border-radius: 1rem;

      transition: transform cubic-bezier(0.4, 0, 0.2, 1) 200ms;

      &__open {
        transform: translateX(0rem);
      }

      &__close {
        transform: translateX(-32rem);
      }

      &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2.5rem;
        padding-right: 0.75rem;

        @media (min-width: 640px) {
          padding: 0 0.5rem;
        }

        .close-button {
          color: rgba(107, 114, 128, 1);
          background: none;
          border: none;
          padding: 0;
          font: inherit;
          cursor: pointer;
          outline: inherit;

          &:hover {
            color: rgba(156, 163, 175, 1);
          }

          .arrow {
            width: 1.5rem;
            height: 1.5rem;
            fill: currentColor;
          }

          span {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
          }

          @media (min-width: 1024px) {
            display: none;
          }
        }

        .logo {
          display: block;
        }
      }

      @media (min-width: 1024px) {
        left: auto;
        top: auto;
        transform: translateX(0);
        overflow-y: auto;
      }
    }
  }
`

export default Sidebar
