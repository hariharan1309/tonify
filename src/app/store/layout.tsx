import SideBar from '@/components/SideBar';

export default function StoreLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <main>
            <SideBar >
                {children}
            </SideBar>
        </main>
    )
}