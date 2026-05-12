import {NavigationMenuComponent} from "@/components/layout/navigation-menu";
import {cn} from "@/lib/utils";
import {ButtonLink} from "@/components/ui/button-link";
import {footerNavItems} from "@/lib/configs/site";

export function Footer() {
    return (
        <footer className={cn(
            "bg-[#18120E] rounded-t-[2rem] flex flex-col md:gap-[30px]",
            "px-4 md:px-20 pt-14 pb-[22px] md:p-20 md:pb-[30.77px] mt-[41px] md:mt-[112px]"
        )}
        >
            <div className="flex flex-col md:flex-row justify-between gap-[21px] md:gap-8 md:gap-0">
                <div
                    className={cn(
                        "flex flex-col gap-0 md:gap-2.5",
                        "items-center text-center md:items-start md:text-left",
                        "max-w-96 mx-auto md:mx-0"
                    )}
                >
                    <h3 className="font-semibold text-[#B5A091] text-[20px]">Hovhannes Harutyunyan</h3>
                </div>

                <div className="flex flex-col lg:flex-row gap-[25px] lg:gap-[24px] justify-center items-start">
                    <div className="lg:hidden w-full">
                        <NavigationMenuComponent
                            items={footerNavItems}
                            isMobile
                            className="gap-[1.5625rem] !font-semibold"
                            menuLinkClassName="text-[0.875rem] !leading-[21px]"
                        />
                    </div>

                    <div className="hidden lg:block">
                        <NavigationMenuComponent items={footerNavItems}/>
                    </div>

                    <ButtonLink className="mx-auto"/>
                </div>
            </div>

            <div className="text-sm text-[#ECE2D9] text-center md:text-end pt-4 md:pt-0">
                <p className="leading-[24.5px]">© 2026 Hovhannes Harutyunyan. All rights reserved.</p>
            </div>
        </footer>
    );
}
