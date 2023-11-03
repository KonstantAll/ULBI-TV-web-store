import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0;
        this._limit = 3
        makeAutoObservable(this); //mobx will watch for this variables
    }

    setBrands(brands) {
        this._brands = brands;
    }
    setTypes(types) {
        this._types = types;
    }

    setDevices(devices){
        this._devices = devices;
    }
    setSelectedType(type) {
        this._selectedType = type;
    }
    setTotalCount(count) {
        this._selectedBrand = count;
    }
    setPage(page) {
        this._selectedBrand = page;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }
    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
    get page() {
        return this._page;
    }
    get limit() {
        return this._limit;
    }
    get totalCount() {
        return this._totalCount;
    }
}