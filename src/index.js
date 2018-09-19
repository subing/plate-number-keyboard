import Letter from './fund/letter'
import H5 from './adpter/h5'
import MiniApp from './adpter/mini-app'
import   "./css/keyboard.css"

export default class IrainPlateKeyboard {
    constructor(options) {
        let type = options.type
        switch (type) {
            case 'h5':
                this.appType = new H5()
                break;
            default:
                this.appType = new MiniApp()
        }
        this.vpl = []
        this.updateFunction = options.updateFunction
        this.init()
    }

    /**
     * 显示键盘操作
     */
    show() {
        this.appType.show()
    }

    /**
     * 关闭键盘操作
     */
    close() {
        this.appType.close()
    }

    /**
     * @pageType
     * 返回键盘初始化视图
     * @returns {*}
     */
    view(pageType,type) {
        let template = ""
        //省份键盘
        template=this.appType.setContainerContent(pageType, type)
        // //数字和字母包括i
        // template+=this.appType.getButtonLayout("getNumberAndLetterHasI", 3)
        // //数字和字母不包括i
        // template+=this.appType.getButtonLayout("getNumberAndLetterNotHasI", 0)
        // //学警港
        // template+=this.appType.getButtonLayout("getStudy", 1)
        // //民使
        // template+=this.appType.getButtonLayout("getPeople", 1)

        return template
    }

    /**
     * 按钮点击时候调用方法
     * @param value
     */
    click(value) {
        //根据不同value做不同操作赋值操作
        this.vpl.push(value)
        this.updateFunction(this.vpl)
    }

    /**
     * 键盘初始化视图数据绑定
     */
    init() {
        let _this = this
        this.view("getProvinces", 0)
        Object.defineProperty(this.appType, "op", {
            set: function (value) {
                //当设置值的时候触发的函数,设置的新值通过参数value拿到
                _this.click(value)
            }
        });
    }


}

window.IrainPlateKeyboard = IrainPlateKeyboard