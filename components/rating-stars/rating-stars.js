Component({
  properties: {
    unitWidth: { //控制星星大小，单位rpx
      type: Number,
      value: 20
    },
    rating: {
      type: Number,
      value: 5
    },
    max: {
      type: Number,
      value: 5
    },
    disabled: {
      type: Boolean,
      value: true
    }
  },

  // 组件私有和公开的方法，组件所使用的方法需在此声明
  methods: {
    _handleTap: function (e) {
      if (this.data.disabled) return;
      const {
        max
      } = this.data;
      const {
        num
      } = e.currentTarget.dataset;
      this.setData({
        rating: max / 5 * num
      })
      // 自定义组件事件
      this.triggerEvent('change', {
        value: max / 5 * num
      }, e);
    }
  }

})