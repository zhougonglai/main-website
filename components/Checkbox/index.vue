<template lang="pug">
.app-checkbox
  .checkbox-con.flex-shrink-0
    input.checkbox(
      type="checkbox"
      :id="id"
      :value="value"
      :disabled="disabled"
      @input="e => $emit('update:value', e.target.value)"
      @change="e => $emit('change', e.target.checked)")
    .checkbox-mask
      i.check
        span
          .line1
          .line2
  label.pl-5(:for="id")
    slot
</template>
<script>
export default {
  name: 'app-checkbox',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      id: Math.random().toString(16).substr(-10)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-checkbox {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  clear: left;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  .checkbox-con {
    width: 23px;
    height: 23px;
    border-radius: 9px;
    position: relative;
    z-index: 1;
  }

  input[type="checkbox"] {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    margin: 0px;
    padding: 0px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;

    &:disabled {
      opacity: 0;
      pointer-events: none;

      ~.checkbox-mask {
        cursor: not-allowed;
        opacity: .6;
        background: transparent !important;
      }
    }

    &:active {
      ~.checkbox-mask {
        background-color: gray;
      }
    }

    &:hover {
      ~.checkbox-mask {
        background-color: lightgray;

        &:before {
          border: 2px solid darkgray;
        }
      }
    }

    &:checked {
      &:hover {
        ~.checkbox-mask {
          box-shadow: 0px 3px 15px 0px var(--primary);
        }
      }

      ~.checkbox-mask {
        box-shadow: 0px 3px 15px 0px var(--primary);

        i:not(.check) {
          opacity: 1;
          transform: scale(1);
          transition: all .25s ease .15s;
        }

        .check {
          opacity: 1;

          span {
            .line1 {
              &:after {
                width: 100%;
                transition: all .25s ease .1s;
              }
            }

            .line2 {
              &:after {
                transition: all .2s ease .30s;
                height: 100%;
              }
            }
          }
        }

        &:after {
          opacity: 1;
          transform: scale(1);
        }

        &:before {
          opacity: 0;
          transform: scale(1.2);
        }
      }
    }
  }

  .checkbox-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 50;
    cursor: pointer;
    pointer-events: none;
    box-sizing: border-box;
    transition: all .25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
    box-sizing: border-box;

    i:not(.check) {
      opacity: 0;
      transition: all .25s ease;
      color: #fff;
      font-size: 1.1em;
      transform: scale(.5);
    }

    .check {
      opacity: 0;
      z-index: 200;
      width: 23px;
      height: 23px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .25s ease;
      border-radius: inherit;

      span {
        transform: rotate(45deg);
        display: block;
        position: relative;
        width: 8px;
        height: 13px;
        margin-top: -4px;

        .line1 {
          background: transparent;
          content: '';
          position: absolute;
          height: 2px;
          border-radius: 2px;
          transition: all .2s ease;
          border-radius: 5px;
          z-index: 100;
          width: 8px;
          bottom: 0px;

          &:after {
            content: '';
            position: absolute;
            width: 0%;
            height: 2px;
            background: #fff;
            transition: all .25s ease;
            border-radius: 5px 0px 0px 5px;
          }
        }

        .line2 {
          bottom: 0px;
          right: 0rem;
          z-index: 100;
          border-radius: 5px;
          background: transparent;
          content: '';
          position: absolute;
          height: 13px;
          border-radius: 5px;
          transition: all .2s ease;
          width: 2px;

          &:after {
            content: '';
            position: absolute;
            width: 2px;
            height: 0%;
            background: #fff;
            transition: all .25s ease;
            bottom: 0px;
            border-radius: 5px 5px 0px 0px;
          }
        }
      }
    }

    &:after {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background: var(--primary);
      transform: scale(.5);
      border-radius: inherit;
      opacity: 0;
      transition: all .25s ease;
      z-index: -1;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      transition: all .25s ease;
      z-index: -1;
      border: 2px solid gray;
      box-sizing: border-box;
    }
  }
}
</style>
