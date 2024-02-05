#include <stdio.h>  // 20 30 40 50 10
int main()
{
  int a[100],i,t,n;

  scanf("%d",&n);
 
  for(i=0;i<n;i++)
  {
    printf("%d = :",i);
    scanf("%d",&a[i]);
  }
  t=a[0];          
  for(i=0;i<n;i++)
  {
    a[i]=a[i+1] ;
  }

  a[n-1]=t;     
  for(i=0;i<n;i++)
  {
    printf("\t%d",a[i]);
  }
}
