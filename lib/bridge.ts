import Module = require("./module");
import metadata = require("../metadata/index");

class ModuleBridge implements mykoop.IModuleBridge {
  instance: Module;

  getInstance(): Module {
    return this.instance || (this.instance = new Module());
  }

  onAllModulesInitialized(moduleManager: mykoop.ModuleManager){
    this.getInstance().init(moduleManager);
  }

  getModule() : mykoop.IModule {
    return this.getInstance();
  }

  getMetaData(callback: mykoop.ModuleMetaDataCallback): void {
    callback(null, metadata);
  }
}

var bridge: mykoop.IModuleBridge = new ModuleBridge();
export = bridge;
