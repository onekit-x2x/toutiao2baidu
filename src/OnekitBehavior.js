/* eslint-disable camelcase */
import STRING from 'oneutil/STRING'
import tt from './tt'

export default function OnekitBehavior(object) {
  const tt_object = {
    onInit(query) {
      let created
      if (object.lifetimes && object.lifetimes.created) {
        created = object.lifetimes.created
      } else if (object.created) {
        created = object.created
      } else {
        created = function () {}
      }
      created.call(this, query)
    },
    didMount() {
      let attached
      if (object.lifetimes && object.lifetimes.attached) {
        attached = object.lifetimes.attached
      } else if (object.attached) {
        attached = object.attached
      } else {
        attached = function () {}
      }
      attached.call(this)
      // //////
      let ready
      if (object.lifetimes && object.lifetimes.ready) {
        ready = object.lifetimes.ready
      } else if (object.ready) {
        ready = object.ready
      } else {
        ready = function () {}
      }
      ready.call(this)
    },
    didUnmount() {
      let detached
      if (object.lifetimes && object.lifetimes.detached) {
        detached = object.lifetimes.detached
      } else if (object.detached) {
        detached = object.detached
      } else {
        detached = function () {}
      }
      detached.call(this)
    }
  }
  if (object) {
    if (!object.methods) { object.methods = {} }
    object.methods.triggerEvent = function (name, data) {
      const funcName = `on${STRING.firstUpper(name)}`
      if (this.props[funcName]) {
        this.props[funcName](data)
      }
    }
    object.methods.createSelectorQuery = tt.createSelectorQuery
  }
  for (const key of Object.keys(object)) {
    const value = object[key]
    if (!value) {
      continue
    }
    switch (key) {
      case 'properties':
        tt_object.props = {}
        for (const p of Object.keys(value)) {
          const v = value[p]
          tt_object.props[p] = (v && v.value ? v.value : null)
        }
        break
      default:
        tt_object[key] = value
    }
  }

  return tt_object
}
