<template>
  <div :class="fullWidth && 'w-100'" :style="{ margin }">
    <router-link
      :to="link"
      v-if="link && !disabled"
      style="text-decoration: none"
      v-bind="linkProps"
    >
      <button
        :style="{ backgroundColor, color, height, padding }"
        :type="submit ? 'submit' : 'button'"
        :tabindex="disabled ? -1 : tabindex"
        :title="title"
        class="border-container"
        @blur="onBlur()"
        @click="!disabled && onClick()"
        ref="button"
        :class="[
          fullWidth && 'full-button',
          reverseColors && 'reverse-colors',
          disabled && 'disabled',
          round && 'round',
          borderless && 'borderless',
          className,
          onHover
        ]"
      >
        <Icon :name="icon" v-bind="iconProps" v-if="icon" />
        <span class="label" v-if="!round">{{ label }}</span>
        <Icon :name="endicon" v-if="!round && endicon" v-bind="iconProps" />
      </button>
    </router-link>

    <button
      v-else
      :style="{ backgroundColor, color, height, padding }"
      :type="submit ? submit : 'button'"
      :tabindex="disabled ? -1 : tabindex"
      :title="title"
      class="border-container"
      @blur="onBlur()"
      @click="!disabled && onClick()"
      ref="button"
      :class="[
        fullWidth && 'full-button',
        reverseColors && 'reverse-colors',
        disabled && 'disabled',
        round && 'round',
        borderless && 'borderless',
        className,
        onHover
      ]"
    >
      <Icon :name="icon" v-bind="iconProps" v-if="icon" />
      <span class="label" v-if="!round">{{ label }}</span>
      <Icon :name="endicon" v-if="!round && endicon" v-bind="iconProps" />
    </button>
  </div>
</template>

<script>
import Icon from "../../components/Icon";

export default {
  name: "Button",
  components: {
    Icon
  },
  props: {
    margin: String,
    icon: String,
    link: String,
    iconProps: Object,
    linkProps: Object,
    submit: Boolean,
    endicon: String,
    label: String,
    className: String,
    title: String,
    round: Boolean,
    borderless: Boolean,
    instantFocus: Boolean,
    height: String,
    padding: String,
    tabindex: {
      type: Number,
      default: () => 0
    },
    onHover: {
      type: String,
      validator(value) {
        return ["reverse", "light", "primary", "none"].indexOf(value) !== -1;
      },
      default: () => "light"
    },
    reverseColors: Boolean,
    backgroundColor: String,
    color: String,
    fullWidth: Boolean,
    disabled: Boolean,
    onClick: {
      type: Function,
      default: () => {}
    },
    onBlur: {
      type: Function,
      default: () => {}
    }
  },
  mounted() {
    if (this.instantFocus) this.$refs.button.focus();
  }
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.25rem;
  color: var(--clr-text-light);
  background-color: var(--clr-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.round {
  --size: 3.12rem;
  border-radius: 50%;
  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  min-height: var(--size);
}

.round > i {
  font-size: 1.75rem;
}

.reverse-colors {
  color: var(--clr-text);
  background-color: var(--clr-background);
}

.full-button {
  width: 100%;
}

.label {
  font-weight: bold;
  font-size: 1rem;
  margin: 0 0.5rem;
  text-align: center;
  width: max-content;
}

button:hover,
button:focus {
  outline: 0;
}

button:hover .label,
button:focus .label {
  /* text-decoration: underline; */
}

.light:hover,
.light:focus {
  background-color: var(--clr-primary-light);
}

.reverse:hover,
.reverse:focus {
  color: var(--clr-text);
  background-color: var(--clr-background);
}

.reverse-colors:hover,
.reverse-colors:focus {
  color: var(--clr-background);
  background-color: var(--clr-primary);
}

html[theme="dark"] .reverse-colors:hover,
html[theme="dark"] .reverse-colors:focus {
  color: var(--clr-text-light);
}

.disabled {
  background-color: var(--clr-text-secondary);
  cursor: not-allowed;
}

.disabled:hover,
.disabled:focus {
  background-color: var(--clr-text-secondary);
}

.disabled:hover .label,
.disabled:focus .label {
  text-decoration: none;
}

.borderless {
  border: none;
}

.primary:hover,
.primary:focus {
  color: var(--clr-text-light);
  background-color: var(--clr-primary);
}

.none:hover,
.none:focus {
  background-color: var(--clr-background);
  color: var(--clr-text);
}
</style>
