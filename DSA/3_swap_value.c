#include <stdio.h> // 50 20 30 40 10
int main ()
{
    int a[100],i,t,n;
    scanf("%d",&n);
    for(i=0;i<n;i++){
        printf("%d = ",i);
        scanf("%d",&a[i]);
    }
    for(i=0;i<n;i++)
    {
        if(i==0)
        {
            t=a[i];
            a[i]=a[n-1];
            a[n-1]=t;
        }
    }
    for(i=0;i<n;i++)
    {
        printf("%d\t",a[i]);
    }
}
