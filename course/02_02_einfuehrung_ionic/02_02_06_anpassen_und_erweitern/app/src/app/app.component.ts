import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: "Home", url: "/Home", icon: "home" },
    { title: "List", url: "/List", icon: "list" },
    { title: "About", url: "/About", icon: "" },
    { title: "ActionSheet 1", url: "/ActionSheet1", icon: "" },
    { title: "ActionSheet 2", url: "/ActionSheet2", icon: "" },
    { title: "Buttons", url: "/Buttons", icon: "" },
    { title: "ToolbarButtons", url: "/ToolbarButtons", icon: "" },
    { title: "Card", url: "/Card", icon: "" },
    { title: "Checkbox", url: "/Checkbox", icon: "" },
    { title: "ActionSheetController", url: "/ActionSheetController", icon: "" },
    { title: "AlertController", url: "/AlertController", icon: "" },
    { title: "Alert", url: "/Alert", icon: "" },
    { title: "Anchor", url: "/Anchor", icon: "" },
    { title: "AnimationController", url: "/AnimationController", icon: "" },
    { title: "App", url: "/App", icon: "" },
    { title: "Avatar", url: "/Avatar", icon: "" },
    { title: "BackButton", url: "/BackButton", icon: "" },
    { title: "Backdrop", url: "/Backdrop", icon: "" },
    { title: "Badge", url: "/Badge", icon: "" },
    { title: "Button", url: "/Button", icon: "" },
    { title: "CardContent", url: "/CardContent", icon: "" },
    { title: "CardHeader", url: "/CardHeader", icon: "" },
    { title: "CardSubtitle", url: "/CardSubtitle", icon: "" },
    { title: "CardTitle", url: "/CardTitle", icon: "" },
    { title: "ChipButton", url: "/ChipButton", icon: "" },
    { title: "ChipIcon", url: "/ChipIcon", icon: "" },
    { title: "Chip", url: "/Chip", icon: "" },
    { title: "Col", url: "/Col", icon: "" },
    { title: "Content", url: "/Content", icon: "" },
    { title: "Content From TestApp", url: "/Content2", icon: "" },
    { title: "Datetime", url: "/Datetime", icon: "" },
    { title: "FabButton", url: "/FabButton", icon: "" },
    { title: "FabList", url: "/FabList", icon: "" },
    { title: "Fab", url: "/Fab", icon: "" },
    { title: "Footer", url: "/Footer", icon: "" },
    { title: "Grid", url: "/Grid", icon: "" },
    { title: "Header", url: "/Header", icon: "" },
    { title: "HideWhen", url: "/HideWhen", icon: "" },
    { title: "Icon", url: "/Icon", icon: "" },
    { title: "Img", url: "/Img", icon: "" },
    { title: "InfiniteScrollContent", url: "/InfiniteScrollContent", icon: "" },
    { title: "InfiniteScroll", url: "/InfiniteScroll", icon: "" },
    { title: "Input", url: "/Input", icon: "" },
    { title: "ItemDivider", url: "/ItemDivider", icon: "" },
    { title: "ItemGroup", url: "/ItemGroup", icon: "" },
    { title: "ItemOption", url: "/ItemOption", icon: "" },
    { title: "ItemOptions", url: "/ItemOptions", icon: "" },
    { title: "ItemSliding", url: "/ItemSliding", icon: "" },
    { title: "Item", url: "/Item", icon: "" },
    { title: "Label", url: "/Label", icon: "" },
    { title: "ListHeader", url: "/ListHeader", icon: "" },
    { title: "LoadingController", url: "/LoadingController", icon: "" },
    { title: "Loading", url: "/Loading", icon: "" },
    { title: "MenuButton", url: "/MenuButton", icon: "" },
    { title: "MenuController", url: "/MenuController", icon: "" },
    { title: "MenuToggle", url: "/MenuToggle", icon: "" },
    { title: "Menu", url: "/Menu", icon: "" },
    { title: "ModalController", url: "/ModalController", icon: "" },
    { title: "Modal", url: "/Modal", icon: "" },
    { title: "NavPop", url: "/NavPop", icon: "" },
    { title: "NavPush", url: "/NavPush", icon: "" },
    { title: "NavSetRoot", url: "/NavSetRoot", icon: "" },
    { title: "Nav", url: "/Nav", icon: "" },
    { title: "Note", url: "/Note", icon: "" },
    { title: "PickerColumn", url: "/PickerColumn", icon: "" },
    { title: "PickerController", url: "/PickerController", icon: "" },
    { title: "Picker", url: "/Picker", icon: "" },
    { title: "Popovercontroller", url: "/Popovercontroller", icon: "" },
    { title: "Popover", url: "/Popover", icon: "" },
    { title: "RadioGroup", url: "/RadioGroup", icon: "" },
    { title: "Radio", url: "/Radio", icon: "" },
    { title: "Range", url: "/Range", icon: "" },
    { title: "RefresherContent", url: "/RefresherContent", icon: "" },
    { title: "Refresher", url: "/Refresher", icon: "" },
    { title: "ReorderGroup", url: "/ReorderGroup", icon: "" },
    { title: "Reorder", url: "/Reorder", icon: "" },
    { title: "RippleEffect", url: "/RippleEffect", icon: "" },
    { title: "RouteRedirect", url: "/RouteRedirect", icon: "" },
    { title: "Route", url: "/Route", icon: "" },
    { title: "RouterOutlet", url: "/RouterOutlet", icon: "" },
    { title: "Router", url: "/Router", icon: "" },
    { title: "Row", url: "/Row", icon: "" },
    { title: "Searchbar", url: "/Searchbar", icon: "" },
    { title: "SegmentButton", url: "/SegmentButton", icon: "" },
    { title: "Segment", url: "/Segment", icon: "" },
    { title: "SelectOption", url: "/SelectOption", icon: "" },
    { title: "SelectPopover", url: "/SelectPopover", icon: "" },
    { title: "Select", url: "/Select", icon: "" },
    { title: "ShowWhen", url: "/ShowWhen", icon: "" },
    { title: "SkeletonText", url: "/SkeletonText", icon: "" },
    { title: "Slide", url: "/Slide", icon: "" },
    { title: "Slides", url: "/Slides", icon: "" },
    { title: "Spinner", url: "/Spinner", icon: "" },
    { title: "SplitPane", url: "/SplitPane", icon: "" },
    { title: "Tab", url: "/Tab", icon: "" },
    { title: "Tabbar", url: "/Tabbar", icon: "" },
    { title: "Tabs", url: "/Tabs", icon: "" },
    { title: "Text", url: "/Text", icon: "" },
    { title: "Textarea", url: "/Textarea", icon: "" },
    { title: "Thumbnail", url: "/Thumbnail", icon: "" },
    { title: "Title", url: "/Title", icon: "" },
    { title: "ToastController", url: "/ToastController", icon: "" },
    { title: "Toast", url: "/Toast", icon: "" },
    { title: "Toggle", url: "/Toggle", icon: "" },
    { title: "Toolbar", url: "/Toolbar", icon: "" },
    { title: "VirtualScroll 1", url: "/VirtualScroll1", icon: "" },
    { title: "VirtualScroll 2", url: "/VirtualScroll2", icon: "" }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
